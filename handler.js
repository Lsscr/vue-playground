const serverless = require('serverless-http');
const express = require('express');
const path = require('path');

const app = express();

// 静态文件服务
app.use(express.static(path.join(__dirname, 'dist')));

// API 路由
app.get('/api/hello', (req, res) => {
  res.json({ message: '你好,世界!' });
});

// 所有其他路由返回 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

module.exports.handler = serverless(app);