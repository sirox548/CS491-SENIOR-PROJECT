from flask import Flask, render_template, url_for, request

# Importing libraries
import os
import joblib
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import LogisticRegression


app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    df = pd.read_csv('data/data.csv')
    df_columns = df[['Title', 'JobDescription']]
    #Features and labels
    feature = df_columns['JobDescription']
    labels = df_columns['Title']

    # CountVectorizer
    y = labels
    corpus = feature
    cv = CountVectorizer()
    X = cv.fit_transform(corpus)
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.33, random_state=42)
    # Naive Bayes Classifier
    nv = MultinomialNB()
    nv.fit(X_train, y_train)
    nv.score(X_test, y_test)
    # #Alternatively
    # nb_model = open('data/job_title_nb_model.pkl', 'rb')
    # nv = joblib.load(nb_model)

    if request.method == 'POST':
        description = request.form['description']
        data = [description]
        vect = cv.transform(data).toarray()
        ml_predict = nv.predict(vect)
    return render_template('index.html', prediction=ml_predict)


if __name__ == '__main__':
    app.run(debug=True)
