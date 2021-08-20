import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Header from '../../components/Header';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('<Header />', () => {
    
    test('Prueba del componente Header', () => {
        const header = shallow(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
        expect(header.length).toEqual(1);
    });
    test('Render del titulo', () => {
        const header = mount(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
        expect(header.find(".Header-title").text()).toEqual("Platzi Store");
    });
});

describe('Header Snapshot', () => {
    test('Comprobar UI del componente Header', () => {
        const header = create(
        <ProviderMock>
            <Header />
        </ProviderMock>
        );
        expect(header.toJSON()).toMatchSnapshot();
    });
});