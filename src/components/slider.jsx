
import '../assets/slider.css';

const Slider = () => {

  const handleLuxuryClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    const luxuryElement = document.getElementById('luxury');
    if (luxuryElement) {
      window.scrollTo({
        top: luxuryElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleTopBoatsClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    const topBoatsElement = document.getElementById('top-boats');
    if (topBoatsElement) {
      window.scrollTo({
        top: topBoatsElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  
  const handleBudgetFriendlyClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    const budgetFriendlyElement = document.getElementById('budget-friendly');
    if (budgetFriendlyElement) {
      window.scrollTo({
        top: budgetFriendlyElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="slider">
  
      <div className="box">
  <a href="#" onClick={handleLuxuryClick}>
    Luxury
  </a>
  </div>

  <div className='box1'>
  <a href="#" onClick={handleTopBoatsClick}>
    Top Boats
  </a>
  </div>
  <div className='box2'>
  <a href="#" onClick={handleBudgetFriendlyClick}>
    Budget Friendly
  </a>
</div>
   </div>
  );
};

export default Slider;