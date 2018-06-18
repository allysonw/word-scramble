class WordsApiService
  # Returns an array of 5 new Word objects based on words from WordsAPI.
  # Documentation: https://www.wordsapi.com/docs/#get-word-details
  def getWords
    # words_array = [Word.find(1)]
    words_array = [];

    # Loop until we get X suitable words
    while words_array.length < 2 do
      begin
        @resp = Faraday.get 'https://wordsapiv1.p.mashape.com/words?hasDetails=frequency&lettersMin=4&lettersMax=4&random=true' do |req|
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

        # Only keep words that have a definition & a frequency rating that
        # is sufficiently high (common words make the game easier and more fun)
        # TODO: figure out a faster way to do this with a frequency above 2.5
        if frequency != nil && frequency > 2.2 && definition.present?

          # Difficulty is the inverse of frequency that words appear in English
          difficulty = (1/2**frequency)*100.floor

          new_word = Word.create(letters: word, difficulty: difficulty, definition: definition)

          words_array.push(new_word);
        end
      end
    end

    words_array;
  end
end
