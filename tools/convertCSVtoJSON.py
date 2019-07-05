import csv
import json

filename = './static/data/epsilon_delta_roster.csv'
# outfile = './static/data/epsilon_delta_roster.json'
outfile = './src/scripts/epsilon_delta_roster.js'

# Read from the CSV
fields = []
rows = []

# Stores the JSON object.
data = {}

with open(filename, 'r', newline='') as csvfile:
    csvreader = csv.reader(csvfile)
    fields = csvreader.__next__()
    # print (f'fields: {fields}')
    # We don't want to show the website that it is optional.
    fields[7] = 'what i do'

    for row in csvreader:
        rows.append(row)
        

for row in rows:
    member = {}

    # Don't show things like T-shirt size.
    for i, field in enumerate(fields[:-5]):
        if i == 2:
            # We don't define class in member.
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
    out.write('export default ')
    json.dump(data, out, indent=4)