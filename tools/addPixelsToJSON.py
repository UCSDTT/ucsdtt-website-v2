import json
import sys
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import time

infile = "./static/data/epsilon_delta_roster.json"
outfile = "./src/scripts/epsilon_delta_roster.js"

TOP_MARGIN = 254
LEFT_MARGIN = 72
TARGET_WIDTH = 978 - LEFT_MARGIN


# Usage: [class] [class] .... for classes you want to pick pixels for.
# if class = *, do for all classes/
# Any classes in here will have their pixels selected and image displayed.
class_to_pick_pixels = []
if len(sys.argv) >= 2:
    for cl in sys.argv[1:]:
        class_to_pick_pixels.append(cl.lower())

clicks = list()
# Bind pixels to the plot.
def onclick(event):
    toolbar = plt.get_current_fig_manager().toolbar
    if toolbar.mode != '':
        print("You clicked on something, but toolbar is in mode {:s}."
              .format(toolbar.mode))
    else:
        # print(f'You clicked: ({event.x}, {event.y})')
        # clicks.append((event.x, event.y))
        print(f'You clicked: ({event.xdata}, {event.ydata})')
        clicks.append((event.xdata, event.ydata))
    plt.close()

data = {}

with open(infile, 'r') as fp:
    data = json.load(fp)

for classname in data:
    cl = data[classname]
    image_url = cl['image']
    if classname in class_to_pick_pixels or '*' in class_to_pick_pixels:
        members = cl['members']
        for i, member in enumerate(members):
            plt.figure().canvas.mpl_connect('button_press_event', onclick)  
            img = mpimg.imread(f'./static/' + image_url)
            imgplot = plt.imshow(img)
            width = imgplot.get_extent()[1]
            height = imgplot.get_extent()[2]
            # Show image width to make sure calibration is correct.
            if i == 0:
                print(f'image width: {width}')

            name = member['name']
            print(f'Please click on {name}.')

            plt.show()

            x_loc = (clicks[i][0] / width) * TARGET_WIDTH + LEFT_MARGIN
            member['pixelLocationX'] = x_loc

            HEIGHT_OVER_WIDTH = height / width
            TARGET_HEIGHT = HEIGHT_OVER_WIDTH * TARGET_WIDTH;

            y_loc = (clicks[i][1] / height) * TARGET_HEIGHT + TOP_MARGIN
            member['pixelLocationY'] = y_loc
    
        clicks = list()

with open(infile, 'w') as out:
    json.dump(data, out, indent=4)

with open(outfile, 'w') as out:
    out.write('export default ')
    json.dump(data, out, indent=4)
