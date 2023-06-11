const {Circle, Triangle, Square} = require('./shapes');

    describe('circle', () => {
      it('should render a green circle', () => {
        const shape = new Circle();
        shape.setColor('green')
        const expected = '<circle cx="150" cy="100" r="80" fill="green" />';
        expect(shape.render()).toEqual(expected);
      });
    });

    describe('triangle', () => {
        it('should render a red triangle', () => {
          const shape = new Triangle();
          shape.setColor('red')
          const expected = '<polygon points="50 15, 100 100, 0 100" fill="red"/>';
          expect(shape.render()).toEqual(expected);
        });
      });

      describe('square', () => {
        it('should render a yellow square', () => {
          const shape = new Square();
          shape.setColor('yellow')
          const expected = '<rect width="300" height="300" fill="yellow" />';
          expect(shape.render()).toEqual(expected);
        });
      });


      
