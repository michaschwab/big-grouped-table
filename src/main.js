document.body.onload = () =>
{
  const data = [];

  data.push(["A", "B", "C", "D", "E", "F"]);

  for(let i = 0; i < 10; i++)
  {
    data.push(Array.from({ length: 6 }, () => Math.round(Math.random() * 100)));
  }

  document.getElementById('table').setData(data);
};