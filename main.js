function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kF74x0iK8/',modelReady);

}

function modelReady(){
    classifier.classify(gotResults);

}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}