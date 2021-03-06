function getDayName (input) {
    // input เป็นเลข 0-6
    // TODO: แปลงเลข 0-6 เป็น วันอาทิตย์ - วันเสาร์

    // hint
    // const daysInWeek = ['วันอาทิตย์', 'วันจันทร์', /*...*/]
    const daysInWeek = ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์']
    return daysInWeek[input];
}

function formatDate (input) {
    // input เป็น Object ในรูปแบบ
    // {
    //     day: 6, // 0=วันอาทิตย์, 1=วันจันทร์, 2=วันอังคาร, ...
    //     date: 15, // วันที่ 1-31
    //     month: 0, // 0=มกราคม, 1=กุมภาพันธ์, ...
    //     year: 2021 // ปี
    // }
    // TODO: แปลง input เป็น String ในรูปแบบ "วันศุกร์ที่ 15 มกราคม พ.ศ. 2564"
    const daysInWeek = ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์']
    const month = ['มกราคม ' ,'กุมภาพันธ์ ','มีนาคม' ,'เมษายน' ,'พฤษภาคม' ,'มิถุนายน' ,'กรกฎาคม' ,'สิงหาคม ','กันยายน' ,'ตุลาคม' ,'พฤศจิกายน','ธันวาคม']

    return daysInWeek[input.day] + 'ที่ ' + input.date + ' ' + month[input.month] + 'พ.ศ. ' + (input.year + 543);


}

function findTotal (input) {
    // input เป็น array ของตัวเลข
    // TODO: ให้หาผลบวกของเลขทั้งหมดใน input
    var num = 0;
    for (var i = 0; i < input.length; i++){
        num += input[i];
    }
    return num;
}

function findMinMax (input) {
    // input เป็น array ของตัวเลข
    // TODO: ให้หาตัวเลขที่มากที่สุดและน้อยที่สุดใน input
    // input.sort((a,b) => a-b);
    // return{
    //     min : input[0],
    //     max : input[input.length - 1]
    // };
    // return {
    //     min : Math.min(...input),
    //     max : Math.max(...input)
    // };
    let min = input[0]
    let max = input[0]
    for(let i = 1; i < input.length; i++){
        if(input[i] > max){
            max = input[i]
        }
        else if(input[i] < min){
            min = input[i]
        }
    }
    return{
        min : min,
        max : max
    }
}

function findBMI (input) {
    // กำหนดให้ input เป็น Array ของ Object ในรูปแบบ
    // [
    //     {
    //         name: "ABC DEF", // ชื่อ นามสกุล
    //         height: 167, // ความสูง มีหน่วยเป็น cm
    //         weight: 72 // น้ำหนัก มีหน่วยเป็น kg
    //     },
    //     {
    //         name: "XYZ DEF", // ชื่อ นามสกุล
    //         height: 194, // ความสูง มีหน่วยเป็น cm
    //         weight: 60 // น้ำหนัก มีหน่วยเป็น kg
    //     },
    //     ...
    // ]
    // TODO: ให้คำนวณดัชนีมวลการ (Body Mass Index, bmi) ของแต่ละคน
    let res = [];
    for (let i = 0; i < input.length; i++){
        res.push({
            name : input[i].name,
            height : input[i].height,
            weight : input[i].weight,
            bmi : (input[i].weight/((input[i].height/100)**2)).toFixed(2)
        })
    }
    return res;
}