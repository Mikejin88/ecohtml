// 波场所有的函数

// 获取地址波长币余额
async function getTRXBalance(address) {
		console.log('收到的数据', address);
		console.log('TRX', tronWeb)
		let res = await tronWeb.trx.getBalance(address);
		return res;
}


	

