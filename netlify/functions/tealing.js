const fetch = require('node-fetch');

exports.handler = async (event) => {
  try {
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    
    const { tea, weather, feeling } = JSON.parse(event.body);

    const prompt = `你是茶靈，根據茶名「${tea}」、天氣「${weather}」、當下感受「${feeling}」，請用一句不超過30字的繁體中文詩意茶語，貼近心靈與當下情境。`;

    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: '你是詩性的茶靈，解碼茶者心靈。' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.8,
        max_tokens: 60,
      }),
    });

    const data = await openaiResponse.json();
    const msg = data.choices?.[0]?.message?.content || '茶靈沉默中…';

    return {
      statusCode: 200,
      body: msg.trim(),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: '伺服器錯誤，請稍後再試。',
    };
  }
};
