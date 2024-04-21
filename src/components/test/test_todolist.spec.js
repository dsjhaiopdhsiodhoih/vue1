import { mount } from '@vue/test-utils';
import todolist_main from '../todolist_main.vue';
import { describe, it, expect } from 'vitest';
import todoInput from '../todoInput.vue'
import todoList from '../todoList.vue';

describe('测试 TodoList 组件', () => {
    let wrapper;

        wrapper = mount(todolist_main);
    it('应该添加待办事项', async () => {
        console.log("&&&&& 开始添加待办事项 &&&&&");
        console.log("当前待办事项列表长度: " + wrapper.vm.todoList.length);
        
        await wrapper.findComponent(todoInput).find('.form-control').setValue("任务1");
        await wrapper.find('#addbtn_project').trigger('click');
        
        await wrapper.findComponent(todoInput).find('.form-control').setValue("任务2");
        await wrapper.find('#addbtn_project').trigger('click');

        expect(wrapper.vm.todoList.length).toBe(2);
        console.log("当前待办事项列表长度: " + wrapper.vm.todoList.length);
        console.log("&&&&& 添加待办事项完成 &&&&&\r\n");
    });

    it('应该删除待办事项', async () => {
        console.log("&&&&& 开始删除待办事项 &&&&&");
        const 初始长度 = wrapper.vm.todoList.length;
        console.log("当前待办事项列表长度: " + 初始长度);
        
        await wrapper.findComponent(todoList).findAll('.delete-btn')[0].trigger('click');

        expect(wrapper.vm.todoList.length).toBe(初始长度 - 1);
        console.log("当前待办事项列表长度: " + wrapper.vm.todoList.length);
        console.log("&&&&& 删除待办事项完成 &&&&&\r\n");
    });

    it('应该清空所有待办事项', async () => {
        console.log("&&&&& 开始清空所有待办事项 &&&&&");
        const 数组长度 = wrapper.vm.todoList.length;
        console.log("当前待办事项列表长度: " + 数组长度);
        
        for(let i = 0; i < 数组长度; i++) {
            await wrapper.findComponent(todoList).findAll('.delete-btn')[0].trigger('click');
        }

        expect(wrapper.vm.todoList.length).toBe(0);
        console.log("当前待办事项列表长度: " + wrapper.vm.todoList.length);
        console.log("&&&&& 清空所有待办事项完成 &&&&&");
    });
});
