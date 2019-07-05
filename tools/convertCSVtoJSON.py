import csv
import json

filename = './static/data/epsilon_delta_roster.csv'
outfile = './static/data/epsilon_delta_roster.json'

# Read from the CSV
fields = []
rows = []

# Stores the JSON object.
data = {}

with open(filename, 'r', newline='') as csvfile:
    csvreader = csv.reader(csvfile)
    fields = csvreader.__next__()

    for row in csvreader:
        rows.append(row)
        
        # print (f'row: {row}')

for row in rows:
    member = {}

    for i, field in enumerate(fields):
        if i == 2:
            # We don't define class.
            continue
        member[field.lower()] = row[i]

    classname = row[2].lower()

    if classname not in data:
        data[classname] = {
            'image': "images/" + classname + "_class.jpg",
            'members': list()
        }
    data[classname]['members'].append(member)
json_data = json.dumps(data)

with open(outfile, 'w') as out:
    json.dump(json_data, out, indent=4)