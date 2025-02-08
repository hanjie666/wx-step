document.getElementById('stepForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const account = document.getElementById('account').value;
    const password = document.getElementById('password').value;
    const steps = document.getElementById('steps').value;
    const resultDiv = document.getElementById('result');

    // 显示加载状态
    resultDiv.innerHTML = '提交中...';
    resultDiv.style.color = '#666';
    resultDiv.style.backgroundColor = '#f8f9fa';

    try {
        // 替换为你的实际API地址
        const response = await fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                account,
                password,
                steps
            })
        });

        const data = await response.json();
        
        if (data.success) {
            resultDiv.innerHTML = '同步成功！步数已更新';
            resultDiv.style.color = '#155724';
            resultDiv.style.backgroundColor = '#d4edda';
        } else {
            resultDiv.innerHTML = `失败：${data.message || '未知错误'}`;
            resultDiv.style.color = '#721c24';
            resultDiv.style.backgroundColor = '#f8d7da';
        }
    } catch (error) {
        resultDiv.innerHTML = '网络错误，请重试';
        resultDiv.style.color = '#721c24';
        resultDiv.style.backgroundColor = '#f8d7da';
    }
});
