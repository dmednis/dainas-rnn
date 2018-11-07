# dainas-rnn

Multi-layer Recurrent Neural Networks (LSTM, RNN) for word-level language models in Python using TensorFlow.
Mostly reused code from [hunkim/word-rnn-tensorflow](https://github.com/hunkim/word-rnn-tensorflow) which was inspired from [sherjilozair/char-rnn-tensorflow](https://github.com/sherjilozair/char-rnn-tensorflow) and Andrej Karpathy's char-rnn.

## Example output
```
Jauni sēju Trīs dēli,
Jāņa ir pate ozolos.
Jau Bitītēm Abi tavā tīrumā:
Kam tev vakarā.

Ne asu Solīj'
Trūka, mirdz rillināja .
Vienam māti meita, čīkstēdama,
Tur Jānīša āboliņu.
```

## Dependencies
* [Python 3] (https://www.python.org/)
* [Tensorflow] (https://www.tensorflow.org/)
* [NodeJS] (https://nodejs.org/en/)

## Dataset extraction
* Run `npm install` in `crawler` directory
* Run `node crawler.js` in `crawler` directory to crawl for dainas
* Run `node agregator.js` in `crawler` directory to agregate dainas into one file
* Copy `out.txt` to main directory as `input.txt`

## Training
Run `python train.py --num_epochs=150 --data_dir=""`

## Generation
Run `python sample.py`
