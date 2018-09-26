import except from 'expect';
import React from 'react';
import {mount,shallow} from 'enzyme';
import {Tasks} from './Tasks';

describe('Tasks page', () => {
    const props = {
        tasks: [
            {
                name: 'Test task 1',
                done: false
            },
            {
                name: 'Test task 2',
                done: false
            },
            {
                name: 'Test task 3',
                done: false
            }
        ],
        actions: {
            createTask: (task) => {
                props.tasks.push(task.task);
                return Promise.resolve();
            },
            updateTask: (index) => {
                return Promise.resolve();
            },
            removeTask: (index) => {
                return Promise.resolve();
            }
        }
    };
    const wrapper = mount(<Tasks {...props} />);

    it('Should render 3 tasks', () => {
        const taskList = wrapper.find('ol');
        except(taskList.children().length).toBe(3);
    });

    it('If task name is empty show error', () => {
        const form = wrapper.find('form');
        form.simulate('submit');
        except(wrapper.state().error).toBe(true);
    });

    it('If task name is greater than 0 then tasks length should be 4', () => {
        const form = wrapper.find('form');
        const task = {
            name: 'Test task 4',
            done: false
        };

        wrapper.setState({task:task});
        form.simulate('submit');
        const taskList = wrapper.find('ol');
        except(taskList.children().length).toBe(4);
    });
});