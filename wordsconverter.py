def convert_file(input_file):
    with open(input_file, 'r') as f:
        lines = f.readlines()

    antonyms = []
    for line in lines:
        words = line.strip().split('—')
        word = words[0].strip()
        antonym = words[1].strip().rstrip(';')
        antonyms.append({ 'word': word, 'antonym': antonym })

    for antonym in antonyms:
        print(f"{{ word: '{antonym['word']}', antonym: '{antonym['antonym']}' }},")

# Пример использования
input_file = 'input.txt'
convert_file(input_file)
