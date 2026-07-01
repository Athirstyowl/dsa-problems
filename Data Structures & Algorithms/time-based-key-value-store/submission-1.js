class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const arrElement = {
            'timestamp': timestamp,
            'value': value
        }
        if(this.keyStore.get(key)){
            this.keyStore.get(key).push(arrElement)
        }
        else{
            this.keyStore.set(key, [arrElement])
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const valueArr = this.keyStore.get(key)
        if(!valueArr || !Array.isArray(valueArr) || valueArr.length === 0){
            return ''
        }
        let l = 0
        let r = valueArr.length-1
        let res = ''

        while(l<=r){
            const mid = Math.floor((r+l)/2)
            if(valueArr[mid].timestamp <= timestamp){
                res = valueArr[mid].value
                l = mid + 1
            }
            else if(valueArr[mid].timestamp > timestamp){
                r = mid-1
            }
        }
        return res
    }
}
 