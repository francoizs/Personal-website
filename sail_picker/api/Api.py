from flask import Flask, request, jsonify
from flask_cors import CORS
from src.windsurfing import Windsurfing as Windsurfing
from src.kitesurfing import Kitesurfing as Kitesurfing
from src.wingsurfing import Wingsurfing as Wingsurfing

app = Flask(__name__)
CORS(app)

@app.route('/api', methods=['GET'])
def index():
    surfing_type = request.args.get('surfing_type')
    surfing_kind = request.args.get('surfing_kind')
    average_knots = request.args.get('average_knots')
    max_knots = request.args.get('max_knots')
    weight = request.args.get('weight')

    if surfing_type == 'windsurfing':
            return jsonify(Windsurfing(surfing_kind, average_knots, max_knots, weight).results())
    elif surfing_type == 'kitesurfing':
            return jsonify(Kitesurfing(surfing_kind, average_knots, max_knots, weight).results())
    # elif surfing_type == 'wingsurfing':
    #         return jsonify(Wingsurfing(surfing_kind, average_knots, max_knots, weight))








    return jsonify({'error': 'Missing parameters'})


if __name__ == '__main__':
    app.run(debug=True)