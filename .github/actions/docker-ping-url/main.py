import os


def ping_url(url):
    return True


def run():
    url = os.environ["INPUT_URL"]

    result = ping_url(url)

    if result is False:
        raise Exception("Ping failed")


if __name__ == "__main__":
    run()

