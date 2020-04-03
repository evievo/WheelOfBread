#!/usr/bin/env python3
import os
import sys
import csv
import json


data = []

def main():
    top = "var circles = "
    bottom = "export default circles;"
    count = 0

    #open csv aand add approite data to circles
    with open('src/static/circles/IMAGESHEET.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')

        for row in csv_reader:
            cur = {}
            names = []
            #check if empty, if not add names list
            for col in row[1:]:
                if col:
                    names.append(col)

            id = row[0]
            url = "https://drive.google.com/uc?id=" + id
            count += 1
            cur = {
                "path": url,
                "names": names,
                "id": count
            }
            data.append(cur)


    outfile = open('src/static/circles/circles.js', 'w')
    middle = json.dumps(data, sort_keys=True, indent=4, separators=(',', ': '))
    #outfile.write(top % json.dumps(data, sort_keys=True, indent=4, separators=(',', ': ')) % bottom)
    out_string = top + middle + "\n" + bottom
    outfile.write(out_string)
if __name__ == "__main__":
    main()
