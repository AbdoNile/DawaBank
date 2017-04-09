
import _ from 'lodash';
import SiteSettings from '../settings/siteSettings';
import  'whatwg-fetch';
class MedicationService{
   
   static FindMedication(match){
         return fetch(SiteSettings.api.address + "/medications/" + match ).then(function(res){
                return res.json();
         });
    }
}

export default MedicationService;