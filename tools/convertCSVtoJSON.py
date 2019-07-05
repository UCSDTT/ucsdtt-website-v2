import csv
import json
import sys
import matplotlib.pyplot as plt
import matplotlib.image as mpimg

# Usage: --pix [class] [class] ....
# if class = *, do for all classes/
# Any classes in here will have their pixels selected and image displayed.
class_to_pick_pixels = []
if len(sys.argv) >= 3:
    if sys.argv[1] == '--pix':
        for cl in sys.argv[2:]:
            class_to_pick_pixels.append(cl.lower())

def onclick(event):
    button = ['left', 'middle', 'right']
    toolbar = plt.get_current_fig_manager().toolbar
    if toolbar.mode != '':
        print("You clicked on something, but toolbar is in mode {:s}."
            .format(toolbar.mode))
    else:
        print("You {0}-clicked coords ({1},{2}) (pix ({3},{4}))"
            .format(button[event.button+1], event.xdata, 
                            event.ydata, event.x, event.y))

plt.figure().canvas.mpl_connect('button_press_event', onclick)

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
        img = mpimg.imread(f'./static/' + image_url)
        imgplot = plt.imshow(img)
        plt.show()

        class_count += 1

    # Add 200 to the y value from matplot lib.

    data[classname]['members'].append(member)
json_data = json.dumps(data)

with open(outfile, 'w') as out:
    out.write('export default ')
    json.dump(data, out, indent=4)
