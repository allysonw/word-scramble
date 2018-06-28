class WordsApiService
  # Returns an array of 3 new Word objects based on words from WordsAPI.
  # Documentation: https://www.wordsapi.com/docs/#get-word-details
  def getWords
    words_array = [];

    if Rails.env.production?
      # Loop until we get 3 suitable words
      while words_array.length < 3 do
        begin
          @resp = Faraday.get 'https://wordsapiv1.p.mashape.com/words?hasDetails=frequency&lettersMin=4&lettersMax=5&random=true' do |req|
            req.headers['X-Mashape-Key'] = ENV['MASHAPE_KEY']
            req.headers['Accept'] = 'application/json'
          end

          body_hash = JSON.parse(@resp.body)

        rescue Faraday::ConnectionFailed
            @error = "There was a timeout. Please try again."
        end

        # Parse the returned JSON
        word = body_hash['word']

        if body_hash['results'].present? && body_hash['results'][0]['definition'].present?
          definition = body_hash['results'][0]['definition']
          frequency = body_hash['frequency']

          if frequency != nil && frequency > 2.2 && definition.present?

            # Difficulty is the inverse of frequency
            # that words appear in English (possibly will
            # use this in later versions of the app)
            difficulty = (1/2**frequency)*100.floor

            new_word = Word.create(letters: word, difficulty: difficulty, definition: definition)

            words_array.push(new_word);
          end
        end
      end
    else
      words_array = [Word.find(102), Word.find(10), Word.find(541)]
    end

    words_array;
  end
end
