# Does not edit CSV in order to preserve CSV's fidelity to the original 
# Epsilon Delta Roster. To change the majors back to their original form,
# just run the convertCSVtoJSON script.

import json

infile = "./static/data/epsilon_delta_roster.json"
outfile = "./src/scripts/epsilon_delta_roster.js"

MAJOR_MAP = {
    'AE' : 'Aerospace Engineering',
    'BE' : 'Bioengineering',
    'CE' : 'Computer Engineering',
    'CoE' : 'Computer Engineering',
    'COGS' : 'Cognitive Science',
    'Chem' : 'Chemistry',
    'ChemE' : 'Chemical Engineering',
    'CS' : 'Computer Science',
    'DataS' : 'Data Science',
    'Econ' : 'Economics',
    'EE' : 'Electrical Engineering',
    'EnvE' : 'Environmental Engineering',
    'EnE' : 'Environmental Engineering',
    'ES' : '',
    'M-CS' : 'Math-CS',
    'ME' : 'Mechanical Engineering',
    'MechE' : 'Mechanical Engineering',
    'Nano' : 'Nanoengineering',
    'NE' : 'Nanoengineering',
    'Phys' : 'Physics',
    'SE' : 'Structural Engineering'
}

data = {}

with open(infile, 'r') as fp:
    data = json.load(fp)

for pledge_class in data:
    for member in data[pledge_class]['members']:
        if len(member['major']) != 0:
            major = member['major'].split()[0]
            major = major.rstrip('0123456789')
            if major in MAJOR_MAP:
                member['major'] = MAJOR_MAP[major]

with open(infile, 'w') as out:
    json.dump(data, out, indent=4)

with open(outfile, 'w') as out:
    out.write('export default ')
    json.dump(data, out, indent=4)
