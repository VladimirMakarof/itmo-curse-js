class Slider {
    constructor() {
        this._slides = document.querySelectorAll('.slide');
        this._dots = [...document.querySelectorAll('.dot')]; //что бы переложить элемент из коллекцию в массив 
        this._previousBtn = document.querySelector('.previous');
        this._nextBtn = document.querySelector('.next');
        this._currentIndex = 0;
        this._addListeners();
    }
    _addListeners() { // метод можем вызывать только внутри класса 
        this._previousBtn.addEventListener('click', this._showPrevious.bind(this));
        this._nextBtn.addEventListener('click', this._showNext.bind(this));
        this._dots.forEach(dot => dot.addEventListener('click', this._showByDot));
    }
    _showByDot({ target }) {
        if (target.classList.contains('active')) return;
        this._hideSlide();
        this._currentIndex = this._dots.indexOf(target);
        //let ind = this._dots.indexOf(target);
        this._showSlider();
    }
    start(interval) {
        setInterval(this._showNext.bint(this), interval);
    }
}

_showPrevious() { // [slide1, slide2, slide3]
    this._hideSlide();
    // пересчитывает текущий индекс  this._currentIndex
    this._currentIndex = this._currentIndex === 0 ? this._slides.length - 1 : this._currentIndex - 1;
    this._showSlider();
}
// currentIndex = 3;
_showNext() {// [slide1, slide2, slide3]
    this._hideSlide();
    this._currentIndex = this._currentIndex === (this._slides.length - 1) ? 0 : this._currentIndex + 1;
    this._showSlider();
}

_showSlider() {
    this._slides[this._currentIndex].classList.add('active');
    this._dots[this._currentIndex].classList.add('active');
}

_hideSlide() {
    this._slides[this._currentIndex].classList.remove('active');
    this._dots[this._currentIndex].classList.remove('active');
}
}
let slider = new Slider();
slider.startShow(3000);