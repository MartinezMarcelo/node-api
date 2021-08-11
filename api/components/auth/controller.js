module.exports = (injectedStore) =>{
    let store = !injectedStore? require('../../../store/dummy') : injectedStore; 

  function upsert(data){
      const authData = {
          id: data.id,
      }

      if(data.username){
          authData.username = data.username;
        }

      if(data.password){
        authData.password = data.password;
      }

      return store.upsert();
  }

  return {
      upsert
  };

};