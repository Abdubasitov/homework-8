// import React, { useState, useEffect } from 'react';

// const DataFetchingComponent = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {

//       const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//       const result = await response.json();
//       setData(result);
//     };

//     fetchData();


//     return () => {
//       console.log('Unmounting DataFetchingComponent');
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Data from API:</h1>
//       {data ? (
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// };

// export default DataFetchingComponent;







// Таймер обратного отсчета







// import React, { useState, useEffect } from 'react';

// const CountdownTimer = () => {
//   const [timer, setTimer] = useState(10);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTimer((prevTimer) => prevTimer - 1);
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//       console.log('Unmounting CountdownTimer');
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Countdown Timer: {timer}</h1>
//       {timer === 0 && <p>Countdown complete!</p>}
//     </div>
//   );
// };

// export default CountdownTimer;







// Обработка изменения зависимостей















// import React, { useState, useEffect } from 'react';

// const InputChangeComponent = () => {
//   const [inputValue, setInputValue] = useState('');

//   useEffect(() => {
//     console.log('Input value changed:', inputValue);

//     return () => {
//       console.log('Unmounting InputChangeComponent');
//     };
//   }, [inputValue]);

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//     </div>
//   );
// };

// export default InputChangeComponent;









// Использование очистки эффекта






// import React, { useEffect } from 'react';

// const CleanupEffectComponent = () => {
//   useEffect(() => {
//     console.log('Mounting CleanupEffectComponent');

//     return () => {
//       console.log('Unmounting CleanupEffectComponent');
//     };
//   }, []);

//   return <div>Component with cleanup effect</div>;
// };

// export default CleanupEffectComponent;





// Имитация подписки на событие





// import React, { useEffect } from 'react';

// const EventSubscriptionComponent = () => {
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       console.log('Mouse coordinates:', { x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       console.log('Unmounting EventSubscriptionComponent');
//     };
//   }, []);

//   return <div>Component with event subscription</div>;
// };

// export default EventSubscriptionComponent;






// Использование асинхронных функций






// import React, { useState, useEffect } from 'react';

// const AsyncApiCallComponent = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();

//     return () => {
//       console.log('Unmounting AsyncApiCallComponent');
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Data from Async API:</h1>
//       {data ? (
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// };

// export default AsyncApiCallComponent;





// Динамическое изменение заголовка страницы








// import React, { useState, useEffect } from 'react';

// const DynamicPageTitleComponent = () => {
//   const [isSpecialConditionMet, setSpecialCondition] = useState(false);

//   useEffect(() => {
//     document.title = isSpecialConditionMet ? 'Special Page Title' : 'Default Page Title';

//     return () => {
//       console.log('Unmounting DynamicPageTitleComponent');
//     };
//   }, [isSpecialConditionMet]);

//   return (
//     <div>
//       <h1>Dynamic Page Title</h1>
//       <button onClick={() => setSpecialCondition(!isSpecialConditionMet)}>
//         Toggle Special Condition
//       </button>
//     </div>
//   );
// };

// export default DynamicPageTitleComponent;