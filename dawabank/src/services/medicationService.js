
import api_client from './api_client';
class MedicationService{
   
   static FindMedication(match){
          return api_client.get( "product?term=" + match ).then(function(res){
                return res.data;
         }); 
    }
}

export default MedicationService;