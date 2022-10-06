import csv
import json

quotes = []
with open('database.csv', 'r') as file:
    csvreader = csv.reader(file)

    for row in csvreader:
        quote = {}
        q = ''.join(row)
        q = q.split(';')
        quote['quote'] = q[0]
        quote['author'] = q[1]
        quotes.append(quote)

print('Processed: ' + str(len(quotes)) + ' quotes')
with open('database.json', 'w') as outfile:
    json.dump(quotes, outfile)
