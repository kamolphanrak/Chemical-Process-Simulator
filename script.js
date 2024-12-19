function simulateProcess() {
    // รับค่าจากฟอร์ม
    const temperature = parseInt(document.getElementById('temperature').value);
    const pressure = parseInt(document.getElementById('pressure').value);
    const catalyst = document.getElementById('catalyst').value;

    // สมมุติการคำนวณผลผลิตจากตัวแปรที่เลือก
    let yieldAmount = 0;
    if (catalyst === "iron") {
        yieldAmount = (temperature * pressure) / 1000;
    } else if (catalyst === "ruthenium") {
        yieldAmount = (temperature * pressure) / 800;
    } else if (catalyst === "platinum") {
        yieldAmount = (temperature * pressure) / 600;
    }

    // แสดงผลการคำนวณ
    const result = `
        ตัวแปรที่เลือก:
        <ul>
            <li>อุณหภูมิ: ${temperature} °C</li>
            <li>ความดัน: ${pressure} atm</li>
            <li>ชนิดตัวเร่งปฏิกิริยา: ${catalyst}</li>
        </ul>
        ผลผลิตจากกระบวนการ: ${yieldAmount.toFixed(2)} กิโลกรัม/ชั่วโมง
    `;
    document.getElementById('output').innerHTML = result;

    // สร้างกราฟผลกระทบของตัวแปร
    createGraph(temperature, pressure, yieldAmount);
}

function createGraph(temp, press, yieldAmount) {
    const ctx = document.getElementById('result-graph').getContext('2d');
    const graph = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['อุณหภูมิ', 'ความดัน', 'ผลผลิต'],
            datasets: [{
                label: 'ผลกระทบจากตัวแปร',
                data: [temp, press, yieldAmount],
                backgroundColor: ['#4CAF50', '#2196F3', '#FF9800'],
                borderColor: ['#388E3C', '#1976D2', '#F57C00'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
