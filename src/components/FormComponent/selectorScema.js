
const schema = {
    plantlt:{
        endPoint:"plantlt", 
        config:{
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
    },
    fisherway12:{
        endPoint:"Fisherway",
        config:{},
        parser:(data)=>{
            return data.filter(e=> e.fisherwayType==1||e.fisherwayType==3).map(e=>{
                return {
                    key:e.fisherwayId,
                    name:e.fisherwayName
                }
            })
        } 
    },
    portchoicelt:{
        endPoint:"portchoicelt",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.pchId,
                    name:e.pchName
                }
            })
        } 
    },
    porttypelt:{
        endPoint:"porttypelt",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.portTypeId,
                    name:e.portTypeName
                }
            })
        } 
    },
    port:{
        endPoint:"port",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.portId,
                    name:e.portName
                }
            })
        } 
    },
    boatmateriallt:{
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
    boattypelt:{
        endPoint:"boattypelt",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.boatTypelId,
                    name:e.boatTypeName
                }
            })
        } 
    },
    species:{
        endPoint:"Species",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.bspeciesId,
                    name:e.speciesName
                }
            })
        } 
    }
}

export default schema