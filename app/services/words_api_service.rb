class WordsApiService
  # returns an array of 5 new Word objects based on words from WordsAPI
  # https://www.wordsapi.com/docs/#get-word-details
  def getWords
    words_array = [Word.find(1), Word.find(2)]
    words_array = [];

    while words_array.length < 2 do
      begin
        @resp = Faraday.get 'https://wordsapiv1.p.mashape.com/words?hasDetails=frequency&lettersMin=6&lettersMax=6&random=true' do |req|
          req.headers['X-Mashape-Key'] = ENV['MASHAPE_KEY']
          req.headers['Accept'] = 'application/json'
        end

        body_hash = JSON.parse(@resp.body)

      rescue Faraday::ConnectionFailed
          @error = "There was a timeout. Please try again."
      end

      word = body_hash['word']
      #definition = body_hash['results'][0]['definition']
      frequency = body_hash['frequency']

      # TODO: figure out a faster way to do this with a frequency above 2.5
      if frequency != nil && frequency > 3

        difficulty = (1/frequency)*100.floor
        new_word = Word.create(letters: word, difficulty: difficulty, definition: '')

        words_array.push(new_word);
      end
    end

    words_array;
  end
end
