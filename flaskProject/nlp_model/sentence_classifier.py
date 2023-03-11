from flask import Blueprint, request

import pickle

nlp_classifier = Blueprint('nlp_classifier',__name__)

clf_filename = 'nlp_model/classifier.pkl'
vec_filename = 'nlp_model/count_vectorizer.pkl'

nb_clf = pickle.load(open(clf_filename, 'rb'))
vectorizer = pickle.load(open(vec_filename, 'rb'))

def print_prob(prediction, classes):
    for i in range(len(classes)):
        print(classes[i]+': ',end='')
        print('{:.3%}'.format(prediction[i])+'\t',end='')
    print()


def classify(text, displayPrediction = False):
    pred = nb_clf.predict(vectorizer.transform([text]))
    pred_probs = nb_clf.predict_proba(vectorizer.transform([text]))

    if displayPrediction:
        print_prob(pred_probs[0], nb_clf.classes_)
    
    return pred, pred_probs, nb_clf.classes_

@nlp_classifier.route('/sentence_classifier/', methods=['GET'])
def getClustering():
    SENTENCE = request.json["sentence"]
    # print(request.args.get("arg"))
    prediction, prediction_probabilites, classes = classify(SENTENCE)

    response = {"class": f"{SENTENCE} belongs to {prediction[0]} class."}

    for ix, _class in enumerate(classes):
        response[_class]= prediction_probabilites[0][ix]
    
    return response