import axios from 'axios'
import _ from 'underscore'

var dashboards = {}

export default {
  getDashboards() {
    return axios.get('http://localhost:8081/api/HomeAutomation.HomeGenie/Config/Groups.List/Control/')
      .then(response => {
        dashboards = response.data
        return response.data;
      })
      .catch(error => {
        console.error(error)
      })
  },

  getDashboard(name){
    if(_.isEmpty(dashboards))
    return null;

    return _(dashboards).findWhere({Name: name});
  }
}