class ColaGenerator {

    constructor() {
        this.itemList = document.querySelector('.cola-list');
    }

    // 모든 것을 초기화하는 함수
    async setup() {
        const response = await this.loadData();
        this.colaFactory(response);
    }

    async loadData() {

        try {
            const response = await fetch('./javascript/items.json');

            if (!response.ok) {
                throw new Error('HTTP ERROR! : ' + response.status);
            }
            return await response.json();
        } catch (error) {
            console.error('콜라 데이터를 로딩하는 중에 문제가 발생했습니다. : ' + error);
        }

    }

    // <li>
    //     <button type="button" class="btn-cola on">
    //         <img src="./images/cola-original.png" alt="">
    //         <span class="cola-name">Orignal_Cola</span>
    //         <strong class="cola-price">1000원</strong>
    //     </button>
    // </li>

    colaFactory(data) {
        const docFrag = new DocumentFragment();

        data.forEach((el) => {
            const item = document.createElement('li');
            const itemTemplate = `<button type="button" class="btn-cola on">
            <img src="./images/cola-original.png" alt="">
            <span class="cola-name">Orignal_Cola</span>
            <strong class="cola-price">1000원</strong>
        </button>`;
            item.innerHTML = itemTemplate;
            this.itemList.append(item);
        });

        this.itemList.append(docFrag);
    }

}

export default ColaGenerator;