from flask import jsonify, redirect
from models import db, Poem, Lyric, User

def error(err_locale, error):
    print("ERROR in", err_locale, ":", error)
    return jsonify(error='Server Error')

# gets all public poems
def get_all_poems():
    try:
        all_poems = Poem.query.filter_by(public == True).all()
        results = [poem.as_dict() for poem in all_poems]
        return jsonify(results)
    except Exception as error:
        return error('getting all poems', error)

# gets a user's poems
def get_user_poems(user_id):
    try:
        poems = Poem.query.filter_by(user_id).all()
        if poems: 
            results = [poem.as_dict() for poem in poems]
            return jsonify(results)
        else: 
            return jsonify("couldn't find poems for user id", user_id)
    except Exception as error:
        return error('getting poems for user', error)

# also gets all the lyrics for that poem
def get_poem(id):
    try: 
        poem = Poem.query.get(id)
        if poem: 
            lyrics = Lyric.query.filter_by(poem_id == id).all()
            results = {
                "poems": poem.as_dict(),
                "lyrics": [lyric.as_dict() for lyric in lyrics]
            }
            return jsonify(results)
        else:
            return jsonify("No poem found at id", id)
    except Exception as error:
        return error('getting a poem', error)

def create_poem(title, public, user_id):
    try: 
        new_poem = Poem(title=title, public=public, user_id=user_id)
        db.session.add(new_poem)
        db.session.commit()
        return jsonify(new_poem.as_dict())
    except Exception as error:
        return error('creating a poem')

def update_poem(id, title, public):
    try: 
        poem = Poem.query.get(id)
        if poem:
            poem.title = title or poem.title
            poem.public = public or poem.public
            db.session.commit()
            return jsonify(poem.as_dict())
        else:
            return jsonify("No poem found at id", id)
    except Exception as error:
        return error('updating a user', error)

def destroy_poem(id):
    try: 
        poem = Poem.query.get(id)
        db.session.delete(poem)
        db.session.commit()
        return redirect('/')
    except Exception as error:
        return error('deleting a user', error)


            
