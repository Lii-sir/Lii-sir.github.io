/* eslint-disable no-undef */
(() => {
	// eslint-disable-next-line no-undef
	console.log(
		'%c Custom Script %c danmu content loaded',
		'color: white; background: #0078E7; padding:5px 0;margin: 0 0 2px 0;border-radius: 4px 0 0 4px;',
		'padding: 4px;border:1px solid #0078E7;border-radius: 0 4px 4px 0; background: linear-gradient(70deg, #e3f9eb, #d1dbff);',
	);

	danMu(() =>
		[
			'但行心之所往，无愧此生清欢。',
			'独步时间长河，细数落纸云烟。',
			'孤舟各向沧海，灯火明灭相望。',
			'枕水静看星河，夜深共话波澜。',
			'孤身隐入红尘，此心安处是乡。',
			'见素抱朴自我，此心安处是乡。',
		].map((text, id) => ({ id, text })),
	);
})();
