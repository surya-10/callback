let a = document.querySelector(".div");

function func1(callback){
    a.textContent = 10;
    setTimeout(callback, 1000)
}
function func2(callback){
    a.textContent = 9;
    setTimeout(callback, 1000)
}
function func3(callback){
    a.textContent = 8;
    setTimeout(callback, 1000)
}
function func4(callback){
    a.textContent = 7;
    setTimeout(callback, 1000)
}
function func5(callback){
    a.textContent = 6;
    setTimeout(callback, 1000)
}
function func6(callback){
    a.textContent = 5;
    setTimeout(callback, 1000)
}
function func7(callback){
    a.textContent = 4;
    setTimeout(callback, 1000)
}
function func8(callback){
    a.textContent = 3;
    setTimeout(callback, 1000)
}
function func9(callback){
    a.textContent = 2;
    setTimeout(callback, 1000)
}
function func10(callback){
    a.textContent = 1;
    setTimeout(callback, 1000)
}
function func11(callback){
    a.textContent = 0;
    setTimeout(callback, 1000)
}
function greet(){
    a.textContent = "Happy Independence's Day";
}

func1(function(){
    func2(()=>{
        func3(()=>{
            func4(()=>{
                func5(()=>{
                    func6(()=>{
                        func7(()=>{
                            func8(()=>{
                                func9(()=>{
                                    func10(()=>{
                                        func11(function(){
                                            greet();
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});