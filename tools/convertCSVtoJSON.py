import csv
import json

filename = './static/data/epsilon_delta_roster.csv'
outfile = './src/scripts/epsilon_delta_roster.js'
outfile_json = './static/data/epsilon_delta_roster.json'

# Read from the CSV
fields = []
rows = []

# Stores the JSON object.
data = {}

with open(filename, 'r', newline='') as csvfile:
    csvreader = csv.reader(csvfile)
    fields = csvreader.__next__()[:-5]
    # We don't want to show the website that it is optional.
    fields[7] = 'what i do'

    for row in csvreader:
        rows.append(row)

class_count = 0
for row in rows:
    member = {}

    # Don't show things like T-shirt size.
    for i, field in enumerate(fields):
        if i == 2:
            # We don't define class in member.
            continue
        member[field.lower()] = row[i]
    classname = row[2].lower()

    if classname not in data:
        image_url = "images/classes/" + \
            str(class_count) + classname + "_class.jpg"
        data[classname] = {
            'image': image_url,
            'members': list()
        }
        class_count += 1 
    data[classname]['members'].append(member)

with open(outfile_json, 'r') as infile:
    old_data = json.load(infile)
    for cl in old_data:
        for mb in range(len(old_data[cl]['members'])):
            cur_mb = old_data[cl]['members'][mb]
            if cl in data:
                for i in range(len(data[cl]['members'])):
                    if cur_mb['name'] == data[cl]['members'][i]['name']:
                        cur_mb.update(data[cl]['members'][i])
                        break
    data = old_data

with open(outfile, 'w') as out:
    out.write('export default ')
    json.dump(data, out, indent=4)

with open(outfile_json, 'w') as out:
    json.dump(data, out, indent=4)
    
