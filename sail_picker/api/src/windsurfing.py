from unittest import result
import numpy as np 
from scipy.interpolate import griddata 



windsurfing_table = [
    [0,     5,	    7,	    10,	    13,	    15, 	20,	    25,	    30,	    35,	    40],
    [50,    12.5,   10.4,   6.4,    5.8,    4.8,    3.6,    3.0,    3.0,    3.0,    3.0],
    [55,	12.5,	11.4,	7.1,	5.8,	4.8,	3.6,	3.3,	3.0,	3.0,	3.0],
    [60,	12.5,	11.4,	7.8,	6.4,	5.3,	4.0,	3.6,	3.0,	3.0,	3.0],
    [65,	12.5,	12.5,	8.6,    7.1,	5.8,	4.4,	3.6,	3.0,	3.0,    3.0],
    [70,	12.5,	12.5,	9.4,	7.1,	6.4,	4.8,	4.0,	3.0,	3.0,    3.0],
    [75,	12.5,	12.5,	10.4,	7.8,	6.4,	4.8,	4.0,    3.3,	3.0,	3.0],
    [80,    12.5,	12.5,	10.4,	8.6,	7.1,    5.3,	4.4,	3.6,	3.3,	3.0],
    [85,	12.5,	12.5,	11.4,	8.6,	7.8,	5.3,	4.4,	3.6,    3.3,	3.0],
    [90,	12.5,	12.5,	12.5,	9.4,	7.8,    5.8,    4.8,	4.0,	3.6,	3.0],
    [95,	12.5,	12.5,	12.5,	9.4,	8.6,	6.4,	5.3,	4.4,    3.6,	3.3],
    [100,	12.5,	12.5,	12.5,	10.4,	9.4,	6.4,	5.3,    4.4,	4.0,    3.3],
    [105,	12.5,	12.5,	12.5,	11.4,	9.4,	7.1,	5.8,	4.8,	4.0,	3.6],
    [110,	12.5,	12.5,	12.5,	11.4,	10.4,	7.1,	5.8,	4.8,	4.4,    3.6],
    [115,	12.5,	12.5,	12.5,	12.5,	11.4,	7.8,	6.4,	5.3,	4.4,	3.6],
    [120,	12.5,	12.5,	12.5,	12.5,	11.4,	7.8,    6.4,	5.3,    4.4,	4.0]
]
 

class Windsurfing:
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
            result = self.standard_results()
            return result
        elif self.surfing_kind == 'foil':
            result = self.foil_results()
            return result

    def interpolate(self, data):
        
        points = np.array([
            [ windsurfing_table[1][0], windsurfing_table[0][1] ], [windsurfing_table[1][0], windsurfing_table[0][2] ], [ windsurfing_table[1][0], windsurfing_table[0][3] ], [windsurfing_table[1][0], windsurfing_table[0][4] ], [ windsurfing_table[1][0], windsurfing_table[0][5] ], [windsurfing_table[1][0], windsurfing_table[0][6] ], [ windsurfing_table[1][0], windsurfing_table[0][9] ], [windsurfing_table[1][0], windsurfing_table[0][8] ], [ windsurfing_table[1][0], windsurfing_table[0][9] ], [windsurfing_table[1][0], windsurfing_table[0][10] ],
            [ windsurfing_table[2][0], windsurfing_table[0][1] ], [windsurfing_table[2][0], windsurfing_table[0][2] ], [ windsurfing_table[2][0], windsurfing_table[0][3] ], [windsurfing_table[2][0], windsurfing_table[0][4] ], [ windsurfing_table[2][0], windsurfing_table[0][5] ], [windsurfing_table[2][0], windsurfing_table[0][6] ], [ windsurfing_table[2][0], windsurfing_table[0][9] ], [windsurfing_table[2][0], windsurfing_table[0][8] ], [ windsurfing_table[2][0], windsurfing_table[0][9] ], [windsurfing_table[2][0], windsurfing_table[0][10] ],
            [ windsurfing_table[3][0], windsurfing_table[0][1] ], [windsurfing_table[3][0], windsurfing_table[0][3] ], [ windsurfing_table[3][0], windsurfing_table[0][3] ], [windsurfing_table[3][0], windsurfing_table[0][4] ], [ windsurfing_table[3][0], windsurfing_table[0][5] ], [windsurfing_table[3][0], windsurfing_table[0][6] ], [ windsurfing_table[3][0], windsurfing_table[0][9] ], [windsurfing_table[3][0], windsurfing_table[0][8] ], [ windsurfing_table[3][0], windsurfing_table[0][9] ], [windsurfing_table[3][0], windsurfing_table[0][10] ],
            [ windsurfing_table[4][0], windsurfing_table[0][1] ], [windsurfing_table[4][0], windsurfing_table[0][2] ], [ windsurfing_table[4][0], windsurfing_table[0][3] ], [windsurfing_table[4][0], windsurfing_table[0][4] ], [ windsurfing_table[4][0], windsurfing_table[0][5] ], [windsurfing_table[4][0], windsurfing_table[0][6] ], [ windsurfing_table[4][0], windsurfing_table[0][9] ], [windsurfing_table[4][0], windsurfing_table[0][8] ], [ windsurfing_table[4][0], windsurfing_table[0][9] ], [windsurfing_table[4][0], windsurfing_table[0][10] ],
            [ windsurfing_table[5][0], windsurfing_table[0][1] ], [windsurfing_table[5][0], windsurfing_table[0][2] ], [ windsurfing_table[5][0], windsurfing_table[0][3] ], [windsurfing_table[5][0], windsurfing_table[0][4] ], [ windsurfing_table[5][0], windsurfing_table[0][5] ], [windsurfing_table[5][0], windsurfing_table[0][6] ], [ windsurfing_table[5][0], windsurfing_table[0][9] ], [windsurfing_table[5][0], windsurfing_table[0][8] ], [ windsurfing_table[5][0], windsurfing_table[0][9] ], [windsurfing_table[5][0], windsurfing_table[0][10] ],
            [ windsurfing_table[6][0], windsurfing_table[0][1] ], [windsurfing_table[6][0], windsurfing_table[0][2] ], [ windsurfing_table[6][0], windsurfing_table[0][3] ], [windsurfing_table[6][0], windsurfing_table[0][4] ], [ windsurfing_table[6][0], windsurfing_table[0][5] ], [windsurfing_table[6][0], windsurfing_table[0][6] ], [ windsurfing_table[6][0], windsurfing_table[0][9] ], [windsurfing_table[6][0], windsurfing_table[0][8] ], [ windsurfing_table[6][0], windsurfing_table[0][9] ], [windsurfing_table[6][0], windsurfing_table[0][10] ],
            [ windsurfing_table[7][0], windsurfing_table[0][1] ], [windsurfing_table[7][0], windsurfing_table[0][2] ], [ windsurfing_table[7][0], windsurfing_table[0][3] ], [windsurfing_table[7][0], windsurfing_table[0][4] ], [ windsurfing_table[7][0], windsurfing_table[0][5] ], [windsurfing_table[7][0], windsurfing_table[0][6] ], [ windsurfing_table[7][0], windsurfing_table[0][9] ], [windsurfing_table[7][0], windsurfing_table[0][8] ], [ windsurfing_table[7][0], windsurfing_table[0][9] ], [windsurfing_table[7][0], windsurfing_table[0][10] ],
            [ windsurfing_table[8][0], windsurfing_table[0][1] ], [windsurfing_table[8][0], windsurfing_table[0][2] ], [ windsurfing_table[8][0], windsurfing_table[0][3] ], [windsurfing_table[8][0], windsurfing_table[0][4] ], [ windsurfing_table[8][0], windsurfing_table[0][5] ], [windsurfing_table[8][0], windsurfing_table[0][6] ], [ windsurfing_table[8][0], windsurfing_table[0][9] ], [windsurfing_table[8][0], windsurfing_table[0][8] ], [ windsurfing_table[8][0], windsurfing_table[0][9] ], [windsurfing_table[8][0], windsurfing_table[0][10] ],
            [ windsurfing_table[9][0], windsurfing_table[0][1] ], [windsurfing_table[9][0], windsurfing_table[0][2] ], [ windsurfing_table[9][0], windsurfing_table[0][3] ], [windsurfing_table[9][0], windsurfing_table[0][4] ], [ windsurfing_table[9][0], windsurfing_table[0][5] ], [windsurfing_table[9][0], windsurfing_table[0][6] ], [ windsurfing_table[9][0], windsurfing_table[0][9] ], [windsurfing_table[9][0], windsurfing_table[0][8] ], [ windsurfing_table[9][0], windsurfing_table[0][9] ], [windsurfing_table[9][0], windsurfing_table[0][10] ],
            [ windsurfing_table[10][0], windsurfing_table[0][1] ], [windsurfing_table[10][0], windsurfing_table[0][2] ], [ windsurfing_table[10][0], windsurfing_table[0][3] ], [windsurfing_table[10][0], windsurfing_table[0][4] ], [ windsurfing_table[10][0], windsurfing_table[0][5] ], [windsurfing_table[10][0], windsurfing_table[0][6] ], [ windsurfing_table[10][0], windsurfing_table[0][9] ], [windsurfing_table[10][0], windsurfing_table[0][8] ], [ windsurfing_table[10][0], windsurfing_table[0][9] ], [windsurfing_table[10][0], windsurfing_table[0][10] ],
            [ windsurfing_table[11][0], windsurfing_table[0][1] ], [windsurfing_table[11][0], windsurfing_table[0][2] ], [ windsurfing_table[11][0], windsurfing_table[0][3] ], [windsurfing_table[11][0], windsurfing_table[0][4] ], [ windsurfing_table[11][0], windsurfing_table[0][5] ], [windsurfing_table[11][0], windsurfing_table[0][6] ], [ windsurfing_table[11][0], windsurfing_table[0][9] ], [windsurfing_table[11][0], windsurfing_table[0][8] ], [ windsurfing_table[11][0], windsurfing_table[0][9] ], [windsurfing_table[11][0], windsurfing_table[0][10] ],
            [ windsurfing_table[12][0], windsurfing_table[0][1] ], [windsurfing_table[12][0], windsurfing_table[0][2] ], [ windsurfing_table[12][0], windsurfing_table[0][3] ], [windsurfing_table[12][0], windsurfing_table[0][4] ], [ windsurfing_table[12][0], windsurfing_table[0][5] ], [windsurfing_table[12][0], windsurfing_table[0][6] ], [ windsurfing_table[12][0], windsurfing_table[0][9] ], [windsurfing_table[12][0], windsurfing_table[0][8] ], [ windsurfing_table[12][0], windsurfing_table[0][9] ], [windsurfing_table[12][0], windsurfing_table[0][10] ],
            [ windsurfing_table[13][0], windsurfing_table[0][1] ], [windsurfing_table[13][0], windsurfing_table[0][2] ], [ windsurfing_table[13][0], windsurfing_table[0][3] ], [windsurfing_table[13][0], windsurfing_table[0][4] ], [ windsurfing_table[13][0], windsurfing_table[0][5] ], [windsurfing_table[13][0], windsurfing_table[0][6] ], [ windsurfing_table[13][0], windsurfing_table[0][9] ], [windsurfing_table[13][0], windsurfing_table[0][8] ], [ windsurfing_table[13][0], windsurfing_table[0][9] ], [windsurfing_table[13][0], windsurfing_table[0][10] ],
            [ windsurfing_table[14][0], windsurfing_table[0][1] ], [windsurfing_table[14][0], windsurfing_table[0][2] ], [ windsurfing_table[14][0], windsurfing_table[0][3] ], [windsurfing_table[14][0], windsurfing_table[0][4] ], [ windsurfing_table[14][0], windsurfing_table[0][5] ], [windsurfing_table[14][0], windsurfing_table[0][6] ], [ windsurfing_table[14][0], windsurfing_table[0][9] ], [windsurfing_table[14][0], windsurfing_table[0][8] ], [ windsurfing_table[14][0], windsurfing_table[0][9] ], [windsurfing_table[14][0], windsurfing_table[0][10] ],
            [ windsurfing_table[15][0], windsurfing_table[0][1] ], [windsurfing_table[15][0], windsurfing_table[0][2] ], [ windsurfing_table[15][0], windsurfing_table[0][3] ], [windsurfing_table[15][0], windsurfing_table[0][4] ], [ windsurfing_table[15][0], windsurfing_table[0][5] ], [windsurfing_table[15][0], windsurfing_table[0][6] ], [ windsurfing_table[15][0], windsurfing_table[0][9] ], [windsurfing_table[15][0], windsurfing_table[0][8] ], [ windsurfing_table[15][0], windsurfing_table[0][9] ], [windsurfing_table[15][0], windsurfing_table[0][10] ]  
       ])
        # print(points)
        values = np.array([
            windsurfing_table[1][1], windsurfing_table[1][2], windsurfing_table[1][3], windsurfing_table[1][4], windsurfing_table[1][5], windsurfing_table[1][6], windsurfing_table[1][7], windsurfing_table[1][8], windsurfing_table[1][9], windsurfing_table[1][10],
            windsurfing_table[2][1], windsurfing_table[2][2], windsurfing_table[2][3], windsurfing_table[2][4], windsurfing_table[2][5], windsurfing_table[2][6], windsurfing_table[2][7], windsurfing_table[2][8], windsurfing_table[2][9], windsurfing_table[2][10],
            windsurfing_table[3][1], windsurfing_table[3][2], windsurfing_table[3][3], windsurfing_table[3][4], windsurfing_table[3][5], windsurfing_table[3][6], windsurfing_table[3][7], windsurfing_table[3][8], windsurfing_table[3][9], windsurfing_table[3][10],
            windsurfing_table[4][1], windsurfing_table[4][2], windsurfing_table[4][3], windsurfing_table[4][4], windsurfing_table[4][5], windsurfing_table[4][6], windsurfing_table[4][7], windsurfing_table[4][8], windsurfing_table[4][9], windsurfing_table[4][10],
            windsurfing_table[5][1], windsurfing_table[5][2], windsurfing_table[5][3], windsurfing_table[5][4], windsurfing_table[5][5], windsurfing_table[5][6], windsurfing_table[5][7], windsurfing_table[5][8], windsurfing_table[5][9], windsurfing_table[5][10],
            windsurfing_table[6][1], windsurfing_table[6][2], windsurfing_table[6][3], windsurfing_table[6][4], windsurfing_table[6][5], windsurfing_table[6][6], windsurfing_table[6][7], windsurfing_table[6][8], windsurfing_table[6][9], windsurfing_table[6][10],
            windsurfing_table[7][1], windsurfing_table[7][2], windsurfing_table[7][3], windsurfing_table[7][4], windsurfing_table[7][5], windsurfing_table[7][6], windsurfing_table[7][7], windsurfing_table[7][8], windsurfing_table[7][9], windsurfing_table[7][10],
            windsurfing_table[8][1], windsurfing_table[8][2], windsurfing_table[8][3], windsurfing_table[8][4], windsurfing_table[8][5], windsurfing_table[8][6], windsurfing_table[8][7], windsurfing_table[8][8], windsurfing_table[8][9], windsurfing_table[8][10],
            windsurfing_table[9][1], windsurfing_table[9][2], windsurfing_table[9][3], windsurfing_table[9][4], windsurfing_table[9][5], windsurfing_table[9][6], windsurfing_table[9][7], windsurfing_table[9][8], windsurfing_table[9][9], windsurfing_table[9][10],
            windsurfing_table[10][1], windsurfing_table[10][2], windsurfing_table[10][3], windsurfing_table[10][4], windsurfing_table[10][5], windsurfing_table[10][6], windsurfing_table[10][7], windsurfing_table[10][8], windsurfing_table[10][9], windsurfing_table[10][10],
            windsurfing_table[11][1], windsurfing_table[11][2], windsurfing_table[11][3], windsurfing_table[11][4], windsurfing_table[11][5], windsurfing_table[11][6], windsurfing_table[11][7], windsurfing_table[11][8], windsurfing_table[11][9], windsurfing_table[11][10],
            windsurfing_table[12][1], windsurfing_table[12][2], windsurfing_table[12][3], windsurfing_table[12][4], windsurfing_table[12][5], windsurfing_table[12][6], windsurfing_table[12][7], windsurfing_table[12][8], windsurfing_table[12][9], windsurfing_table[12][10],
            windsurfing_table[13][1], windsurfing_table[13][2], windsurfing_table[13][3], windsurfing_table[13][4], windsurfing_table[13][5], windsurfing_table[13][6], windsurfing_table[13][7], windsurfing_table[13][8], windsurfing_table[13][9], windsurfing_table[13][10],
            windsurfing_table[14][1], windsurfing_table[14][2], windsurfing_table[14][3], windsurfing_table[14][4], windsurfing_table[14][5], windsurfing_table[14][6], windsurfing_table[14][7], windsurfing_table[14][8], windsurfing_table[14][9], windsurfing_table[14][10],
            windsurfing_table[15][1], windsurfing_table[15][2], windsurfing_table[15][3], windsurfing_table[15][4], windsurfing_table[15][5], windsurfing_table[15][6], windsurfing_table[15][7], windsurfing_table[15][8], windsurfing_table[15][9], windsurfing_table[15][10]

            ]) 
        # print(values)
        xi=(data) 
        result=griddata(points, values, xi, method='linear') 
        return result



    def standard_results(self):
        data = [self.weight, self.actual_knots]
        interpolated_result = self.interpolate(data)
        result = round(interpolated_result[0], 1)
        return result
