# -*- coding: utf-8 -*-
"""
Created on Thu May 30 17:55:24 2019

@author: jitendra
"""

numbers = [
              [34, 63, 88, 71, 29],
              [90, 78, 51, 27, 45],
              [63, 37, 85, 46, 22],
              [51, 22, 34, 11, 18]
           ]

"""def mean(num_list):
    return sum(num_list) / len(num_list)"""

averages = list(map(lambda numbers:sum(numbers)/len(numbers), numbers))
print(averages)


cities = ["New York City", "Los Angeles", "Chicago", "Mountain View", "Denver", "Boston"]

"""def is_short(name):
    return len(name) < 10"""

short_cities = list(filter((lambda cities:len(cities)<10), cities))
print(short_cities)
