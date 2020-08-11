
const schema = {
    plantlt:{
        endPoint:"plantlt", 
        config:{
            // mode:"multiple"
        },
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.plantId,
                    name:e.plantName
                }
            })
        }
    },
    soiltypelt:{
        endPoint:"soiltypelt", 
        config:{
            // mode:"multiple"
        },
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.stypeId,
                    name:e.stypeName
                }
            })
        }
    },
    winddirectionlt:{
        endPoint:"winddirectionlt", 
        config:{
            // mode:"multiple"
        },
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.wdId,
                    name:e.wdName
                }
            })
        }
    },
    gafard:{
        endPoint:"gov/", 
        config:{
            // mode:"multiple"
        },
        parser:(data)=>{
            return {
                    key:data.gafrd.gafrdId,
                    name:data.gafrd.gafrdName
                }
        }
    },
    gov:{
        endPoint:"gov", 
        config:{
            // mode:"multiple"
        },
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.govId,
                    name:e.govName
                }
            })
        }
    },
    lakegov:{
        endPoint:"lake/", 
        config:{
        },
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.lakeId,
                    name:e.lakeName
                }
            })
        }
    },
    fisherDesk:{
        endPoint:"fisherydisk/",
        config:{
            // mode:"multiple"
        },
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.fdCode,
                    name:e.fdName
                }
            })
        }
    },
    markaz:{
        endPoint:"markaz/",
        config:{
            // mode:"multiple"
        },
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.markazId,
                    name:e.markazName
                }
            })
        }
    },
    job:{
        endPoint:"users",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.uJobId,
                    name:e.uJobName
                }
            })
        } 
    },
    boatdegree:{
        endPoint:"boatdegreelt",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.boatDId,
                    name:e.boatDName
                }
            })
        } 
    },
    boatmaterial:{
        endPoint:"boatmateriallt",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.boatMaterialId,
                    name:e.boatMaterialName
                }
            })
        } 
    },
    associationgov:{
        endPoint:"association-gov/",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.assId,
                    name:e.assName
                }
            })
        } 
    },
    fisherway:{
        endPoint:"Fisherway",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.fisherwayId,
                    name:e.fisherwayName
                }
            })
        } 
    }
}

export default schema