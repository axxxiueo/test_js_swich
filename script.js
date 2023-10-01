const weathers = ["晴れ","曇り","雨","雪"],
    randomNumber = Math.floor(Math.random() * weathers.length),
    randomWeather = weathers[randomNumber],
    weathersMessageElement = document.getElementById("weathersMessage");
document.getElementById("weather").textContent = "今日の天気は" + randomWeather + "です。";

switch(randomWeather){
    case "晴れ":
        weathersMessageElement.textContent = "日傘を持っていった方がいいかも";
        break;
    case "曇り":
        weathersMessageElement.textContent = "今日は1日曇っているみたい";
        break;
    case "雨":
        weathersMessageElement.textContent = "傘を持っていきましょう";
        break;
    case "雪":
        weathersMessageElement.textContent = "今日はコートを着ていきましょう";
        break;

default:
    weathersMessageElement.textContent = "今日の天気はマズイかも";
};
