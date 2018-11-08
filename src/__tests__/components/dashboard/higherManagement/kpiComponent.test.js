import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import KpiComponent from '../../../../components/dashboard/higherManagement/kpiComponent';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        kpiData: {
            "totalPortfolio": "$3,450,589",
            "ytdExpenditure": "$838,698",
            "deliveryRate": "24%",
            "deliveryProjection": "$3,280,070",
            "expectedDelivery": "95%"
        }
    };
    const enzymeWrapper = shallow(<KpiComponent {...props} />);
    return {
      props,
      enzymeWrapper
    }
  }


  describe('Components', () => {
    describe('KPI Component', () => {
      it('should render self and subcomponents', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find('.toTalPortfolioKPI').find('.main-head').text()).toBe('Total Portfolio')
      })
    })
  })