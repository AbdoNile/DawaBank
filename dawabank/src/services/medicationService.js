
import SiteSettings from '../settings/siteSettings';
import  'whatwg-fetch';
class MedicationService{
   
   static FindMedication(match){
        /*  return fetch(SiteSettings.api.address + "product?term=" + match ).then(function(res){
                return res.json();
         }); */
         var myMedications = new Array(3);
         for (let index = 0; index < 3; index++) {
             myMedications[index] =  {
                "id": "string",
                "tradeName": "medication_name_" + index ,
                "genericName": "generice_name" + index,
                "medicationId": "id_" + index
              }
             
         }
         return Promise.resolve(myMedications);
    }
}

export default MedicationService;