import except from 'expect';
import React from 'react';
import {mount,shallow} from 'enzyme';
import AddTask from './addTask';

function setup() {
    let props = {
        inputChange: () => {},
        onSubmit: () => {},
        inputValue: ''
    };

    return shallow(<AddTask {...props} />);
}

describe('Add task form', () => {
    const wrapper = setup();
    it('Renders form', () => {
        except(wrapper.find('form').length).toBe(1);
    });
    it('Renders input field', () => {
        except(wrapper.find('input').length).toBe(1);
    });
    it('Renders button', () => {
        except(wrapper.find('button').length).toBe(1);
    });
    it('Button type is submit', () => {
        except(wrapper.find('button').props().type).toBe('submit');
    });
});