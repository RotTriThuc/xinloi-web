class MyHeart:
    def __init__(self):
        self.you = "everything"
        self.mistakes = []
        self.regret = True
        self.love = True

    def say_sorry(self):
        if self.regret and self.love:
            print("Anh xin lỗi vì đã làm em tổn thương 😔")
            print("Anh biết mình sai, và anh đang cố sửa từng chút một.")
            print("Anh không mong em tha thứ ngay, chỉ mong em cảm nhận được lòng anh.")
        else:
            print("System error: Heart not functioning properly 💔")

    def promise(self):
        print("Anh hứa sẽ thay đổi, không vì lời nói, mà vì hành động.")
        print("Nếu em cho anh một cơ hội, anh sẽ không làm em thất vọng nữa.")

# Run the apology program
if __name__ == "__main__":
    me = MyHeart()
    me.say_sorry()
    me.promise()
