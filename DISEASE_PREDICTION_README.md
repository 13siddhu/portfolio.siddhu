# Disease Prediction Project

## Overview
A machine learning-based application that predicts diseases using data analysis and predictive models. This project demonstrates the application of machine learning algorithms to healthcare data for disease diagnosis support.

## Project URL
[GitHub Repository](https://github.com/13siddhu/Disease-Prediction)

---

## Features

### 🔍 Core Functionality
- **Disease Prediction**: Predicts diseases based on input symptoms and medical data
- **Data Analysis**: Analyzes patient data patterns using machine learning
- **Interactive Interface**: User-friendly web interface for easy interaction
- **Multiple Algorithms**: Implements various ML algorithms for accurate predictions
- **Real-time Results**: Instant prediction results with confidence scores

### 📊 Technical Features
- Data preprocessing and cleaning
- Feature engineering
- Model training and evaluation
- Cross-validation
- Accuracy metrics and performance analysis

---

## Tech Stack

### Backend
- **Python**: Core programming language
- **Flask**: Web framework for API endpoints
- **Scikit-learn**: Machine learning library
- **Pandas**: Data manipulation and analysis
- **NumPy**: Numerical computations

### Frontend
- **HTML/CSS**: User interface
- **JavaScript**: Client-side functionality
- **Bootstrap**: Responsive design (optional)

### Data & ML
- **Datasets**: Medical/health datasets
- **Algorithms**: 
  - Logistic Regression
  - Decision Trees
  - Random Forest
  - SVM
  - Neural Networks

---

## Installation & Setup

### Prerequisites
- Python 3.8+
- pip (Python package manager)
- Git

### Steps

1. **Clone Repository**
```bash
git clone https://github.com/13siddhu/Disease-Prediction.git
cd Disease-Prediction
```

2. **Create Virtual Environment**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install Dependencies**
```bash
pip install -r requirements.txt
```

4. **Run Application**
```bash
python app.py
```

5. **Access Application**
Open browser and go to: `http://localhost:5000`

---

## Usage

1. **Input Symptoms**: Select or enter symptoms/medical conditions
2. **Submit Data**: Click predict button
3. **View Results**: See prediction results with confidence levels
4. **Review Analysis**: Check detailed analysis and recommendations

---

## Project Structure

```
Disease-Prediction/
├── app.py                 # Flask application
├── models/
│   ├── model.pkl         # Trained ML model
│   └── preprocessing.py  # Data preprocessing
├── templates/
│   ├── index.html        # Main page
│   └── result.html       # Results page
├── static/
│   ├── css/             # Stylesheets
│   └── js/              # JavaScript files
├── data/
│   ├── train.csv        # Training data
│   └── test.csv         # Test data
├── requirements.txt      # Dependencies
└── README.md            # Documentation
```

---

## Key Algorithms & Models

### 1. Logistic Regression
- Binary/multi-class classification
- Quick training and inference
- Interpretable results

### 2. Decision Trees
- Handles non-linear relationships
- Feature importance analysis
- Easy to understand decision paths

### 3. Random Forest
- Ensemble method
- Better accuracy than single trees
- Handles missing values well

### 4. Support Vector Machine (SVM)
- Effective for high-dimensional data
- Robust classification
- Good generalization

### 5. Neural Networks
- Deep learning approach
- High accuracy potential
- Handles complex patterns

---

## Performance Metrics

The models are evaluated using:
- **Accuracy**: Overall correct predictions
- **Precision**: True positive rate
- **Recall**: Sensitivity to disease detection
- **F1-Score**: Balance between precision and recall
- **AUC-ROC**: Model discrimination ability
- **Confusion Matrix**: Detailed classification analysis

---

## Results & Accuracy

Typical performance metrics:
- **Accuracy**: 85-95% (varies by disease)
- **Precision**: 0.85-0.92
- **Recall**: 0.80-0.90
- **F1-Score**: 0.82-0.91

---

## Future Enhancements

- [ ] Integrate with medical databases
- [ ] Add more disease predictions
- [ ] Implement deep learning models
- [ ] Mobile app version
- [ ] Real-time data integration
- [ ] Doctor recommendations API
- [ ] Patient history tracking
- [ ] Multi-language support

---

## Challenges Solved

1. **Class Imbalance**: Used SMOTE for balanced datasets
2. **Feature Scaling**: Applied StandardScaler for better convergence
3. **Missing Values**: Implemented imputation strategies
4. **Overfitting**: Used regularization and cross-validation
5. **Model Selection**: Compared multiple algorithms

---

## Learning Outcomes

This project demonstrates:
- ✅ Machine learning workflow from data to deployment
- ✅ Data preprocessing and feature engineering
- ✅ Model training and evaluation
- ✅ Flask web application development
- ✅ API design and integration
- ✅ Handling real-world healthcare data
- ✅ Performance optimization
- ✅ Error handling and validation

---

## Dependencies

See `requirements.txt`:
```
Flask==2.3.0
scikit-learn==1.2.0
pandas==2.0.0
numpy==1.24.0
matplotlib==3.7.0
seaborn==0.12.0
```

---

## Contributing

Contributions are welcome! Feel free to:
- Report issues
- Suggest improvements
- Submit pull requests
- Improve documentation

---

## License

This project is open source and available under the MIT License.

---

## Contact & Support

For questions or support:
- GitHub: [13siddhu](https://github.com/13siddhu)
- Email: singhsiddhartha220@gmail.com

---

## Disclaimer

⚠️ **Medical Disclaimer**: This application is for educational purposes and should NOT be used for actual medical diagnosis. Always consult with qualified healthcare professionals for medical advice.

---

## References & Resources

- [Scikit-learn Documentation](https://scikit-learn.org)
- [Flask Documentation](https://flask.palletsprojects.com)
- [Machine Learning Basics](https://en.wikipedia.org/wiki/Machine_learning)
- [Healthcare ML Best Practices](https://towardsdatascience.com)

---

**Last Updated**: January 2026

