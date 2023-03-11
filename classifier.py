import pickle

# Prints the probabilities and class names
def print_prob(prediction, classes):
    for i in range(len(classes)):
        print(classes[i]+': ',end='')
        print('{:.3%}'.format(prediction[i])+'\t',end='')
    print()

# Classifies the text, toggle boolean display prediction
def classify(text, displayPrediction = True):
    
    clf_filename = 'nlp_model/classifier.pkl'
    vec_filename = 'nlp_model/count_vectorizer.pkl'

    nb_clf = pickle.load(open(clf_filename, 'rb'))
    vectorizer = pickle.load(open(vec_filename, 'rb'))

    pred = nb_clf.predict(vectorizer.transform([text]))
    pred_probs = nb_clf.predict_proba(vectorizer.transform([text]))

    if displayPrediction:
        print_prob(pred_probs[0], nb_clf.classes_)

    return pred, pred_probs, nb_clf.classes_

### EXAMPLE ###
SENTENCE = 'Python library for machine learning'

prediction, prediction_probabilites, classes = classify(SENTENCE)

print(SENTENCE,"belongs to the", prediction[0], "class.")