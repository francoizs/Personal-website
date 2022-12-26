import numpy as np 
from scipy.interpolate import griddata 



kitesurfing_table = [
    [0,     11,     16,     21,     27,     33],
    [40,    7,      7,      6,      5,      4],
    [50,    8,      9,      6.5,    5.5,    4.5],
    [60,    10,     10,     7.5,    6.5,    5],
    [70,    11,     11,     8.5,    7.5,    5.5],
    [80,    12,     12,     10,     8.5,    6.5],
    [90,    14,     14,     10,     9,      7],
    [100,   14,     14,     11.5,   9.5,    8],
    [110,   14,     14,     12,     10,     8.5],
    [120,   14,     14,     12,     10,     8.5]
]

class Kitesurfing:
    def __init__(self, surfing_kind, average_knots, max_knots, weight):
        self.surfing_kind = surfing_kind
        self.average_knots = int(average_knots)
        self.max_knots = int(max_knots)
        self.weight = int(weight)
        self.actual_knots = ((self.max_knots - self.average_knots) / 10 ) * 3 + self.average_knots
    
    def __str__(self):
        return f'{self.surfing_kind} {self.average_knots} {self.max_knots} {self.weight} {self.actual_knots}' 

    def results(self):
        if self.surfing_kind == 'standard':
            result_with_dot = self.standard_results()
            result_with_dot_rounded = str(round(result_with_dot, 1))
            result = ''
            for item in result_with_dot_rounded:
                if item == '.':
                    break
                result += item
        elif self.surfing_kind == 'foil':
            result = self.foil_results()
        return str(float(result)) + 'm2'

    def interpolate(self, data):
        
        points = np.array([
            [ kitesurfing_table[1][0], kitesurfing_table[0][1] ], [kitesurfing_table[1][0], kitesurfing_table[0][2] ], [ kitesurfing_table[1][0], kitesurfing_table[0][3] ], [kitesurfing_table[1][0], kitesurfing_table[0][4] ], [ kitesurfing_table[1][0], kitesurfing_table[0][5] ],
            [ kitesurfing_table[2][0], kitesurfing_table[0][1] ], [kitesurfing_table[2][0], kitesurfing_table[0][2] ], [ kitesurfing_table[2][0], kitesurfing_table[0][3] ], [kitesurfing_table[2][0], kitesurfing_table[0][4] ], [ kitesurfing_table[2][0], kitesurfing_table[0][5] ],
            [ kitesurfing_table[3][0], kitesurfing_table[0][1] ], [kitesurfing_table[3][0], kitesurfing_table[0][3] ], [ kitesurfing_table[3][0], kitesurfing_table[0][3] ], [kitesurfing_table[3][0], kitesurfing_table[0][4] ], [ kitesurfing_table[3][0], kitesurfing_table[0][5] ],
            [ kitesurfing_table[4][0], kitesurfing_table[0][1] ], [kitesurfing_table[4][0], kitesurfing_table[0][2] ], [ kitesurfing_table[4][0], kitesurfing_table[0][3] ], [kitesurfing_table[4][0], kitesurfing_table[0][4] ], [ kitesurfing_table[4][0], kitesurfing_table[0][5] ],
            [ kitesurfing_table[5][0], kitesurfing_table[0][1] ], [kitesurfing_table[5][0], kitesurfing_table[0][2] ], [ kitesurfing_table[5][0], kitesurfing_table[0][3] ], [kitesurfing_table[5][0], kitesurfing_table[0][4] ], [ kitesurfing_table[5][0], kitesurfing_table[0][5] ],
            [ kitesurfing_table[6][0], kitesurfing_table[0][1] ], [kitesurfing_table[6][0], kitesurfing_table[0][2] ], [ kitesurfing_table[6][0], kitesurfing_table[0][3] ], [kitesurfing_table[6][0], kitesurfing_table[0][4] ], [ kitesurfing_table[6][0], kitesurfing_table[0][5] ],
            [ kitesurfing_table[7][0], kitesurfing_table[0][1] ], [kitesurfing_table[7][0], kitesurfing_table[0][2] ], [ kitesurfing_table[7][0], kitesurfing_table[0][3] ], [kitesurfing_table[7][0], kitesurfing_table[0][4] ], [ kitesurfing_table[7][0], kitesurfing_table[0][5] ],
            [ kitesurfing_table[8][0], kitesurfing_table[0][1] ], [kitesurfing_table[8][0], kitesurfing_table[0][2] ], [ kitesurfing_table[8][0], kitesurfing_table[0][3] ], [kitesurfing_table[8][0], kitesurfing_table[0][4] ], [ kitesurfing_table[8][0], kitesurfing_table[0][5] ],
            [ kitesurfing_table[9][0], kitesurfing_table[0][1] ], [kitesurfing_table[9][0], kitesurfing_table[0][2] ], [ kitesurfing_table[9][0], kitesurfing_table[0][3] ], [kitesurfing_table[9][0], kitesurfing_table[0][4] ], [ kitesurfing_table[9][0], kitesurfing_table[0][5] ]
        ])
        # print(points)
        values = np.array([
            kitesurfing_table[1][1], kitesurfing_table[1][2], kitesurfing_table[1][3], kitesurfing_table[1][4], kitesurfing_table[1][5],
            kitesurfing_table[2][1], kitesurfing_table[2][2], kitesurfing_table[2][3], kitesurfing_table[2][4], kitesurfing_table[2][5],
            kitesurfing_table[3][1], kitesurfing_table[3][2], kitesurfing_table[3][3], kitesurfing_table[3][4], kitesurfing_table[3][5], 
            kitesurfing_table[4][1], kitesurfing_table[4][2], kitesurfing_table[4][3], kitesurfing_table[4][4], kitesurfing_table[4][5],
            kitesurfing_table[5][1], kitesurfing_table[5][2], kitesurfing_table[5][3], kitesurfing_table[5][4], kitesurfing_table[5][5],
            kitesurfing_table[6][1], kitesurfing_table[6][2], kitesurfing_table[6][3], kitesurfing_table[6][4], kitesurfing_table[6][5],
            kitesurfing_table[7][1], kitesurfing_table[7][2], kitesurfing_table[7][3], kitesurfing_table[7][4], kitesurfing_table[7][5],
            kitesurfing_table[8][1], kitesurfing_table[8][2], kitesurfing_table[8][3], kitesurfing_table[8][4], kitesurfing_table[8][5], 
            kitesurfing_table[9][1], kitesurfing_table[9][2], kitesurfing_table[9][3], kitesurfing_table[9][4], kitesurfing_table[9][5]
           
            ]) 
        # print(values)
        xi=(data) 
        result=griddata(points, values, xi, method='linear') 
        return result



    def standard_results(self):
        data = [self.weight, self.actual_knots]
        interpolated_result = self.interpolate(data)
        result_with_dot = interpolated_result[0]
        return result_with_dot



test = Kitesurfing('standard', 18, 20, 80)
print(test.results())