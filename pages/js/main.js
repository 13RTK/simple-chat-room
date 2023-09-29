class Message {
    constructor(message, datetime) {
        this.message = message;
        this.datetime = new Intl.DateTimeFormat("zh-CN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }).format(new Date(datetime));
    }
}

const app = {
    data() {
        return {
            currentMessage: "",
            messages: [],
        };
    },

    methods: {
        async checkMessageUpdate() {
            setInterval(async () => {
                const messages = await this.getMessages();

                if (messages.length !== this.messages) {
                    this.updateMessage();
                }
            }, 3000);
        },

        formatDate(datetime) {
            return new Intl.DateTimeFormat("zh-CN", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            }).format(new Date(datetime));
        },

        async submitMessage() {
            if (this.currentMessage === "") {
                alert("请输入正确的消息");
                return;
            }

            const response = await fetch(
                "http://127.0.0.1:3000/api/v1/message",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        content: this.currentMessage,
                    }),
                }
            );
            const data = await response.json();

            if (data.status !== "success" || !response.ok) {
                alert("发送失败");
                return;
            }

            await this.updateMessage();

            this.currentMessage = "";
        },

        async reset() {
            if (this.messages.length === 0) {
                return;
            }

            const response = await fetch(
                "http://127.0.0.1:3000/api/v1/message",
                {
                    method: "PATCH",
                }
            );
            const data = await response.json();

            if (!response.ok || data.status !== "success") {
                alert("重置失败");
                return;
            }

            this.messages = [];
        },

        async getMessages() {
            const response = await fetch(
                "http://127.0.0.1:3000/api/v1/message",
                {
                    method: "GET",
                }
            );
            const data = await response.json();
            if (!response.ok || data.status !== "success") {
                alert("获取失败");
                return;
            }

            const dataArr = await data.data;
            return dataArr;
        },

        async updateMessage() {
            const dataArr = await this.getMessages();
            this.messages = [];

            dataArr.forEach((data) => {
                this.messages.push(new Message(data.content, data.postTime));
            });
        },
    },
    mounted: function () {
        console.log("init");
        this.updateMessage();
        this.checkMessageUpdate();
    },
};

Vue.createApp(app).mount("#app");
